from flask import Flask, request, jsonify

app = Flask(__name__)

bd = {
    "menu": [],
    "orden": [],
    "inventario": []
}

@app.route('/menu', methods=['POST'])
def agregar_menu():
    nuevo_menu = request.json.get("menu", [])
    bd["menu"].extend(nuevo_menu)
    return jsonify({"mensaje": "Menú actualizado", "Menu": bd["menu"]}), 201

@app.route('/orden', methods=['POST'])
def agregar_orden():
    nueva_orden = request.json.get("orden", [])
    bd["orden"].extend(nueva_orden)
    return jsonify({"mensaje": "Órdenes actualizadas", "Orden": bd["orden"]}), 201

@app.route('/inventario', methods=['POST'])
def agregar_inventario():
    nuevo_inventario = request.json.get("inventario", [])
    bd["inventario"].extend(nuevo_inventario)
    return jsonify({"mensaje": "Inventario actualizado", "Inventario": bd["inventario"]}), 201

@app.route('/menu', methods=['GET'])
def obtener_menu():
    return jsonify(bd["menu"]), 200

@app.route('/orden', methods=['GET'])
def obtener_orden():
    return jsonify(bd["orden"]), 200

@app.route('/inventario', methods=['GET'])
def obtener_inventario():
    return jsonify(bd["inventario"]), 200

@app.route('/datos', methods=['GET'])
def obtener_datos():
    return jsonify(bd), 200

if __name__ == '__main__':
    app.run(debug=True)
