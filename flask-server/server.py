# create flask app

from flask import Flask, jsonify, request
from flask_cors import CORS
import model

app = Flask(__name__)
CORS(app)

@app.route('/predict',methods=['POST'])
def predict():
   data = model.final_prediction()
   return jsonify(data)

if __name__ == '__main__':  
   app.run(debug=True)
