"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Product
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/category', methods=['GET'])
def get_categories():
    categories= Category.query.all()
    data = [category.serialize() for category in categories]
    return jsonify(data), 200

@api.route('/product', methods=['POST'])
def create_product():
    data = request.json
    print(data)
    return jsonify({"message": "producto creado"}), 200

@api.route('/user', methods=['GET'])
def get_users():
    users= User.query.all()
    data = [user.serialize() for user in users]
    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    print(data)
    return jsonify({"message": "usuario creado"}), 200