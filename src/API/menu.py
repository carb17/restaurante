from flask import Flask, request, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

JSON_FILE = 'api.json'

def cargar_datos():
    try:
        if os.path.exists(JSON_FILE):
            with open(JSON_FILE, 'r') as file:
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
