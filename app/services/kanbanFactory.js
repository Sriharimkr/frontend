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
        "id": "0_ATvHgd64om"
      },
      "outputs": [],
      "source": [
        "(function() {\n",
        "\n",
        "  var kanbanFactory = function($http) {\n",
        "    var factory = {};\n",
        "\n",
        "    factory.getBoards = function(userID, token) {\n",
        "      return $http.get('/boards/owner/' + userID, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.createBoard = function(board, token) {\n",
        "      return $http.post('/boards', board, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.getBoardByID = function(boardID, token) {\n",
        "      return $http.get('/boards/' + boardID, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.editBoard = function(board, token) {\n",
        "      return $http.put('/boards/' + board._id, board, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.deleteBoard = function(boardID, token) {\n",
        "      return $http.delete('/boards/' + boardID, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.getCards = function(boardID, token) {\n",
        "      return $http.get('/boards/' + boardID + '/cards', { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.createCard = function(boardID, card, token) {\n",
        "      return $http.post('/boards/' + boardID + '/cards', card, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.editCard = function(boardID, card, token) {\n",
        "      return $http.put('/boards/' + boardID + '/cards/' + card._id, card, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.deleteCard = function(boardID, card, token) {\n",
        "      return $http.delete('/boards/' + boardID + '/cards/' + card._id, { headers: {'x-access-token': token } });\n",
        "    };\n",
        "\n",
        "    factory.logout = function() {\n",
        "      return $http.post('/users/logout');\n",
        "    };\n",
        "\n",
        "    return factory;\n",
        "  };\n",
        "\n",
        "  kanbanFactory.$inject = ['$http'];\n",
        "\n",
        "  angular.module('kanban-board').factory('kanbanFactory', kanbanFactory);\n",
        "\n",
        "}());"
      ]
    }
  ]
}