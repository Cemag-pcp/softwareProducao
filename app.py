from flask import Flask,render_template, redirect, url_for, request, session, flash, make_response, Response

app = Flask(__name__)
app.secret_key = "producao"


@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == 'POST':
            return redirect(url_for('inicio'))

    return render_template('login.html')

@app.route('/')
def inicio(): 
    
    return render_template("corte_estamparia.html")

@app.route('/solda')
def solda(): 
    
    return render_template("solda.html")

@app.route('/pintura')
def pintura(): 
    
    return render_template("pintura.html")


if __name__ == '__main__':
    app.run(debug=True)
