# SmartChat – Chatbot intelligent pour étudiants

## Description du projet

SmartChat est une application web interactive conçue pour faciliter la communication entre les étudiants et un assistant virtuel intelligent.  
Grâce à l’intégration de technologies d’IA et de NLP (Natural Language Processing), le chatbot est capable de comprendre les questions des étudiants et d’y répondre de manière pertinente et naturelle.

L’objectif est de créer un outil moderne, simple d’utilisation et utile dans un contexte universitaire, permettant aux étudiants d’obtenir rapidement des informations sur leurs cours, les horaires, les événements ou d’autres aspects de la vie étudiante.

---

## Public cible
- Étudiants

---

## Technologies utilisées

### Front-End
- React  
- CSS3 / TailwindCSS  

### Back-End
- Node.js  
- Express.js  

### Base de données
- PostgreSQL  

### API & Services
- REST API  

### Données et formats
- JSON / XML  

### Outils & environnements
- Git / GitHub  

### Autres technologies
- IA / NLP (Natural Language Processing)

---

## Fonctionnalités prévues
- L’utilisateur peut poser des questions au chatbot  
- Le chatbot répond automatiquement à chaque question  
- Dashboard d’administration pour la gestion des réponses  
- Historique des questions et réponses  
- Système de filtres et de recherche  

---

## Diagramme de classes

```mermaid
classDiagram
    class Utilisateur {
        +int id
        +string nom
        +string email
        +string role
        +poserQuestion()
    }

    class Question {
        +int id
        +string contenu
        +datetime dateEnvoi
    }

    class Reponse {
        +int id
        +string contenu
        +datetime dateReponse
    }

    class Chatbot {
        +traiterQuestion()
        +genererReponse()
    }

    Utilisateur "1" --> "0..*" Question : pose
    Chatbot "1" --> "0..*" Reponse : renvoie
    Question "0..*" --> "1" Chatbot : adressée_à
