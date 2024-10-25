from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

JSON_FILE = 'api.json'

def cargar_datos():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r') as file:
            return json.load(file)
    return {"menu": []} 

def guardar_datos(data):
    with open(JSON_FILE, 'w') as file:
        json.dump(data, file, indent=4)

@app.route('/menu', methods=['POST'])
def agregar_menu():
    nuevo_plato = request.json
    if 'id' not in nuevo_plato or 'nombre' not in nuevo_plato or 'precio' not in nuevo_plato:
        return jsonify({"error": "Faltan datos necesarios: id, nombre y precio son requeridos."}), 400
    data = cargar_datos()
    data["menu"].append(nuevo_plato)
    guardar_datos(data)
    return jsonify({"mensaje": "Plato agregado exitosamente.", "plato": nuevo_plato}), 201

@app.route('/menu', methods=['GET'])
def obtener_menu():
    data = cargar_datos()
    return jsonify(data["menu"]), 200  

if __name__ == '__main__':
    app.run(debug=True)
