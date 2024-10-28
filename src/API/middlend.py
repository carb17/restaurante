import requests
from flask import Flask, jsonify
from menu import obtener_menu  
from pedido import obtener_pedidos  
from inventario import obtener_inventario  
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/menu', methods=['GET'])
def obtener_menu_api():
    response = requests.get("http://127.0.0.1:5000/menu")
    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "No se pudo obtener el menú"}), 500

@app.route('/orden', methods=['GET'])
def obtener_orden_api():
    response = requests.get("http://127.0.0.1:5000/pedido")
    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "No se pudo obtener el pedido"}), 500

@app.route('/inventario', methods=['GET'])
def obtener_inventario_api():
    response = requests.get("http://127.0.0.1:5000/inventario")
    if response.status_code == 200:
        return jsonify(response.json()), 200
    else:
        return jsonify({"error": "No se pudo obtener el inventario"}), 500
    
@app.route('/middlend', methods=['GET'])
def middlend():
    return jsonify({"mensaje": "Conexión exitosa a middlend"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
