const modal = require('../modal/journal-modal')

const service = {

  getInfo: (id) => {
    console.log(modal)
    return modal.findByPk(id)
  },

  getList: (offset, limit) => {
    return modal.findAndCountAll({ offset, limit })
  },

  insert: (journal) => {
    return modal.create(...journal)
  },
  
  update: (id, journal) => {
    return modal.update(journal, {
      'where': {
        'id': {
          'eq': id
        }
      }
    })
  },

  delete: (id) => {
    return modal.destroy({
      'where':{
        'id':{
          'eq':id
        }
      }
    })
  }
}

module.exports = service