var casper = require('casper').create();
var fs = require('fs');

var pageIndex = casper.cli.args[0];
var fileName = casper.cli.args[1];
    
function getLinks() {
    var links = document.querySelectorAll('tr td:first-child a');
    return Array.prototype.map.call(links, function(e) {
        var url = e.getAttribute('href');
        return url.split('=')[1];
   });
}

casper.start('http://remediabuscador.mjusticia.gob.es/remediabuscador/avanzarRetrocederRegistroMediador.action?index='+pageIndex+'&nombre=&especialidad=0&area=0', function() {

    this.echo(this.getHTML('ul#resultados li.activo span'));
    links = this.evaluate(getLinks);
    this.echo(links);
    for (var id in links) {
        //this.echo(links[id]);
        fs.write(fileName, links[id]+'\n', 'a');
    }
});

casper.run();