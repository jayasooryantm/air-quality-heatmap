"""Flask Application for air quality heatmap"""

# Libraries
from flask import Flask
from flask import render_template

# initialize flask app and assets
app = Flask(__name__)
debug_status = True


# Routes


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/pm10")
def pm10():
    return render_template("pm10.html")


@app.route("/pm25")
def pm25():
    return render_template("pm25.html")


# Run app
if __name__ == "__main__":
    app.run(debug=debug_status, host="0.0.0.0", port=3000)
