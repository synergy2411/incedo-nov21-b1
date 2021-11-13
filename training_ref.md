# JavaScript, Typescript and Angular

# What is TypeScript?
- Microsoft Extension of JavaScript
- OOPS Concepts / Latest JS Features - ES6+ features
- Ease of Code
- Interfaces and extending classes
- Type Definition; Type safe
- Typescript Compiler -> JavaScript Code -> Browsers
- Angular itself programmed in TS

# JavaScript Datatypes :
- Primitive Types -> String, Number, Boolean, Date
- Reference Types -> Objects, Array, Functions

# TypeScript Datatypes :
- any
- enum
- null
- undefined
- unknown
- void
- complex types
- classes as types

# ES6/ ES2015 features
- Arrow function
- let/const 
- spread/ rest operator
- Destructuring - Arrays / Objects
- Default Parameters
- Promises
- Template literals
- Map/Set
- Classes
- Modules
- Decorators - Simple function with meta information :
    : Classes - @Component() | @Directive() | @Pipe() | @Injectable() | @NgModule()
    : Properties - @Input() | @Output()
    : Methods - @HostListener()
    : Parameters - @Optional() | @Inject()

# Angular Building Blocks :
- Component - ES6 Classes + @Component({})
- Directives - ES6 Classes + @Directive({})
- Pipes - ES6 Class + @Pipe({})
- Services - ES6 Class + @Injectable()
- Modules - ES6 Class + @NgModule()

# to install typescript -
> npm install -g typescript


# What is Angular?
- Creates Single Page App
- 2 way data binding
- Web based and mobile app (Ionic Framework)
- JavaScript Framework
- Written in TypeScript
- Lazy loading (Webpack - module bundler)
- Open Source
- Component based architecture (reusable piece of code)
- A client-side JavaScript Framework (Collection of Libraries)
- Custom Elements <product-detail></product-detail>
- Template / Model driven forms
- Performant Apps - AOT Compiler
- AoT : Ahead-of-time - 
    : Faster App
    : Efficient JavaScript
    : "Tree-shaking" - removing unused from App
    : lesser build size - reduced the final app size by 40%
    : gets loaded faster on device/browser
- JIT - Just-in-time - Browers
- Typescript - tsc - transpile the code into JS
- Remote Server call
- Reactive programming (rxjs)
- template writing
- MVC pattern
- Custom components etc


# ngrx - primarily for State Management in Angular




Angular - >= v2 Latest ng Version; Superheroic Framework; Angular Universal (SSR)
AngularJS - v1 - Library
jQuery - DOM Manipulation, Ajax Calls, Animation
React - light-weight, render the UI efficiently, Facebook Team, huge community Support
    : State Management - redux, react-redux
    : SPA - react-router-dom
    : DOM interaction - react-dom
    : Form Validation - formik
    : XHR - axios, jQuery
Vue - Evan You ; Template oriented, vuelidate, vuex, axios, jquery etc
Knockout - MVVM Pattern, efficient 2 way data binding
Backbone - client side MVC
Polymer - Custom Web Component
Stencil - Custome Web Component
*Ember - Changing API very frequently

Next - Full Stack
Express/Koa/Hapi - Web app framework for Node
Node - Platform for running JavaScript on Server-side


# Angular CLI Tool (Better development experience)
> npm install @angular/cli@10 -g
> ng new <project-name>
> ng new users-app
> cd users-app -> npm install
> npm start | ng serve

> ng generate component <name> | ng g c <name>
> ng generate directive <name> | ng g d <name>
> ng generate pipe <name> | ng g p <name>
> ng generate service <name> | ng g s <name>
> ng generate module <name> | ng g m <name>

> npm start -> ng serve

# to install bootstrap
- npm install bootstrap@4 

# Component Types
- Smart / Container - contains other components and/or businees logic
- Dump / Presentational - receives the data from parent and creates the UI

# Component Life Cycle
# Directives
- Structural Directives
- Attributes Directives                         

# Forms
- Template Forms
- Model / Reactive Forms 

# Pipes
- Builtin pipes
- Custom Pipes

# Services


- Component : creates the UI
- Directives : marker with some special meaning
- Pipes : format the data on UI
- Services : front-end business logic
- Module : container for inter-related stuff


arr = ['appple', 'banana', 'oranges]
- Mutable Change
arr.push('kiwi')

- Immutable Change : Pure Pipes
arr = ['apple', 'banana', 'oranges', 'kiwi']

# Build reactive register form with following fields :
- Drop-down (Country)
- radio buttons (gender)
- checkbox (Term & Conditions)
- Confirm Password Field (text box)



# Services
- Observables : another way of reactive programming/ async JS
- HTTP Client

# Routing - SPA


# HttpClientModule
- Unlock the HttpClientModule
- Inject the HttpClient Class
- Make XHR Call


# Promise
- Producer Code 
- Consumer Code - then()

# Observable 
- Producer code : http call
- Consumer Code - subscribe()


# Http Calls - GET | POST | DELETE | PATCH -> https://jsonplaceholder.typicode.com/posts
# Notes App - {id, title, body}
- HTTP Calls
- Get only 10 posts/notes
- Notes Component -> Notes Service -> XHR Call -> https://jsonplaceholder.typicode.com/posts



# What is Single Page App?
- don't reload the browser
- minimal changes on UI
- more interactive
- low network bandwidth usages

# Load the landing modules in first load
# Rest all modules should be loaded lazily



- Routing : 30
- Modules : 30
- Testing : 30
- Performance Optimization Techniques : 15
- App Deploy - Firebase : 15
