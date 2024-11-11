from flask import Flask, render_template

app = Flask(__name__, template_folder='templates' , static_folder='static')

@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/editor')
def editor():
    return render_template('editor.html')

if __name__ == '__main__':
    app.run(debug=True)