var _ = require('underscore');
var faker = require('faker');


function generate() {

  return {
    data:  _.range(100).map((l) => {
        return {
          name: faker.name.findName(),
          id: faker.random.number(),
          questions: _.range(5).map((l) => {
              return {
                title   :faker.name.title(),
                content :faker.lorem.paragraph(),
                point   :faker.random.number()
              }
          }),
          answers:_.range(5).map((l) => {
              return {
                content: faker.lorem.paragraphs(),
                point  : faker.random.number(),
                owner  : faker.name.findName()
              }
          })
        }
    })
  }
}

var people = generate();




var id = 7;

function get(id) {
    return _.findWhere(people, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(people);
};

exports.add = function (req, res) {
    var person = req.body;
    person.id = id++;
    people.push(person);
    res.status(201).send(person);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.delete = function (req, res) {
    var found = get(req.params.id);
    if (found) people = _.without(people, found);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.update = function (req, res) {
    var found = get(req.params.id);
    if (found) _.extend(found, req.body);
    res.status(found ? 200 : 404);
    res.send(found);
};
