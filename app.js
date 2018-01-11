var g = G$('John', 'Doe');

// simple greeting
g.greet();

// chaining helps here!
g.greet().greet(true);

// changing language on the fly
g.greet().setLang('es').greet(true);

// unsupported language passed:
g.greet().setLang('fr').greet(true);
