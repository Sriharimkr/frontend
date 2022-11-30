{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "0brcgCfz8KhJ"
      },
      "outputs": [],
      "source": [
        "(function() {\n",
        "\n",
        "  var userFactory = function($http) {\n",
        "    var factory = {};\n",
        "\n",
        "    factory.getUsers = function(token) {\n",
        "      return $http.get('/users', { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.getUserById = function(userID, token) {\n",
        "      return $http.get('/users/' + userID, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.authenticate = function(username, password) {\n",
        "      var jsonObject = { username: username, password: password };\n",
        "      return $http.post('/users/authenticate', jsonObject, { headers: {'x-platform': 'web' } });\n",
        "    };\n",
        "\n",
        "    factory.register = function(username, email, password) {\n",
        "      var jsonObject = { username: username, password: password, email: email };\n",
        "      return $http.post('/users/register', jsonObject);\n",
        "    };\n",
        "\n",
        "    return factory;\n",
        "  };\n",
        "\n",
        "  userFactory.$inject = ['$http'];\n",
        "\n",
        "  angular.module('kanban-board').factory('userFactory', userFactory);\n",
        "\n",
        "}());"
      ]
    }
  ]
}