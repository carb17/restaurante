from flask import Flask, request, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def cargar_datos():
    try:
        with open('src/API/api.json', 'r') as file:
            return json.load(file)
    except Exception as e:
        print(f"Error al cargar datos: {str(e)}") 
        return {"menu": []} 
    return {"menu": []} 

@app.route('/menu', methods=['GET'])
def obtener_menu():
    data = cargar_datos()
    print("Datos cargados:", data)
    return jsonify(data["menu"]), 200  

if __name__ == '__main__':
    app.run(debug=True)
