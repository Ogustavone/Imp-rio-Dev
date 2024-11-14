from flask import Flask, render_template, request, redirect, url_for, session, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

USUARIOS = {
    'admin': {'senha': 'admin123', 'role': 'admin'},
    'user1': {'senha': 'user123', 'role': 'usuario'}
}

@app.route('/')
def inicio():
    if 'usuario' not in session:
        return redirect(url_for('login'))
    return render_template('index.html')

@app.route('/ADM')
def ADM():
    if 'usuario' not in session:
        return redirect(url_for('login'))
    if USUARIOS[session['usuario']]['role'] != 'admin':
        return "Acesso negado", 403
    return render_template('ADM.html', usuarios=USUARIOS)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username in USUARIOS and USUARIOS[username]['senha'] == password:
            session['usuario'] = username
            return render_template('index.html')
        else:
            flash('Usuário ou senha inválidos', 'danger')
            return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect(url_for('login'))

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/editor')
def editor():
    return render_template('editor.html')

@app.route('/add_user', methods=['POST'])
def add_user():
    if 'usuario' not in session or USUARIOS[session['usuario']]['role'] != 'admin':
        return "Acesso negado", 403

    username = request.form['username']
    password = request.form['password']
    role = request.form['role']
    
    if username in USUARIOS:
        flash('Usuário já existe', 'danger')
        return redirect(url_for('ADM'))
    
    USUARIOS[username] = {'senha': password, 'role': role}
    flash(f'Usuário {username} cadastrado com sucesso!', 'success')
    return redirect(url_for('ADM'))

@app.route('/adicionar_usuario')
def adicionar_usuario():
    if 'usuario' not in session:
        return redirect(url_for('login'))
    if USUARIOS[session['usuario']]['role'] != 'admin':
        return "Acesso negado", 403
    return render_template('adicionar_usuario.html', usuarios=USUARIOS)

if __name__ == '__main__':
    app.run(debug=True)