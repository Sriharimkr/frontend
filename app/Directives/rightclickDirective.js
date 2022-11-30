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
        "id": "9WfqZV4p58Ni"
      },
      "outputs": [],
      "source": [
        "(function() {\n",
        "  \n",
        "  //Right click custom directive\n",
        "  var rightClickDirective = function($parse) {\n",
        "    return function(scope, element, attrs) {\n",
        "        var fn = $parse(attrs.ngRightClick);\n",
        "        element.bind('contextmenu', function(event) {\n",
        "            scope.$apply(function() {\n",
        "                event.preventDefault();\n",
        "                fn(scope, {$event:event});\n",
        "            });\n",
        "        });\n",
        "    };\n",
        "  };\n",
        "\n",
        "  rightClickDirective.$inject = ['$parse'];\n",
        "\n",
        "  angular.module('kanban-board').directive('ngRightClick', rightClickDirective);\n",
        "\n",
        "}());"
      ]
    }
  ]
}