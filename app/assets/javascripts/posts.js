document.addEventListener('DOMContentLoaded', fn, false)

let tagFactory = {
	id: null,
	body: null,
	destroy: false
}

function fn() {
  new Vue({
    el: '#tags',
    data: {
      tags: window.existingTags.map(tag => {tag.destroy = false; return tag})
    },
    methods: {
    	addTag() {
    		this.tags.push(Object.assign({}, tagFactory))
    	}
    }
  })
}
