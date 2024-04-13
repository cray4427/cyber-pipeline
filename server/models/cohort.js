const Model = require('./base')

/**
 * @swagger
 * components:
 *   schemas:
 *     Cohort:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: autogenerated id
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 255
 *           description: the name of the cohort
 *         notes:
 *           type: string
 *           description: any notes about the cohort
 *         teachers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: autogenerated id
 *               name:
 *                 type: string
 *                 description: the name of the teacher
 *               notes:
 *                 type: string
 *                 description: notes about teacher in the cohort
 *       example:
 *         id: 1
 *         name: Spring 2023
 *         notes: PACK grant funded cohort
 *         teachers:
 *           - id: 1
 *             name: Test Teacher
 *             notes: Joined on time
 */
class Cohort extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'cohorts'
  }

  // Each model must have a column (or a set of columns) that uniquely
  // identifies the rows. The column(s) can be specified using the `idColumn`
  // property. `idColumn` returns `id` by default and doesn't need to be
  // specified unless the model's primary key is something else.
  static get idColumn() {
    return 'id'
  }

  // Methods can be defined for model classes just as you would for
  // any JavaScript class. If you want to include the result of these
  // methods in the output json, see `virtualAttributes`.
  //fullName() {
  //  return this.firstName + ' ' + this.lastName;
  //}

  // Optional JSON schema. This is not the database schema!
  // No tables or columns are generated based on this. This is only
  // used for input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  // See http://json-schema.org/ for more info.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        name: { type: 'string', minLength: 1, maxLength: 255 },
      },
    }
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    // Importing models here is one way to avoid require loops.
    const Teacher = require('./teacher')

    return {
      teachers: {
        relation: Model.ManyToManyRelation,
        modelClass: Teacher,
        join: {
          from: 'cohorts.id',
          // ManyToMany relation needs the `through` object
          // to describe the join table.
          through: {
            // If you have a model class for the join table
            // you need to specify it like this:
            // modelClass: PersonMovie,
            from: 'teacher_cohorts.cohort_id',
            extra: ['notes'],
            to: 'teacher_cohorts.teacher_id',
          },
          to: 'teachers.id',
        },
        filter: (builder) =>
          builder.select('id', 'name', 'teacher_cohorts.notes'),
      },
    }
  }
}

module.exports = Cohort
