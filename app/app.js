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
        "id": "hvuccO8V9qqU"
      },
      "outputs": [],
      "source": [
        "(function() {\n",
        "\n",
        "  var app = angular.module('kanban-board', [angularDragula(angular), 'ngMaterial', 'ngAnimate',\n",
        "  'ngMessages', 'ngRoute']);\n",
        "\n",
        "  app.config(function($routeProvider) {\n",
        "    $routeProvider\n",
        "      .when('/login', {\n",
        "        controller: 'loginController',\n",
        "        templateUrl: 'views/login.html'\n",
        "      })\n",
        "      .when('/register', {\n",
        "        controller: 'registerController',\n",
        "        templateUrl: 'views/register.html'\n",
        "      })\n",
        "      .when('/kanban', {\n",
        "        controller: 'kanbanController',\n",
        "        templateUrl: 'views/kanban.html'\n",
        "      })\n",
        "      .otherwise( { redirectTo: '/login' } );\n",
        "    });\n",
        "\n",
        "}());"
      ]
    }
  ]
}