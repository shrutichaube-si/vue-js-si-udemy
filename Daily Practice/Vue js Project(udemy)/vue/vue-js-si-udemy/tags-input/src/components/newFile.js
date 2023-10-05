/* __placeholder__ */
export default (await import('vue')).defineComponent({
//     data() {
//         return {
//             tags: ["vue", " react", "angular"]
//         }
// }
data: () => ({
tags: ["vue", "react", "angular"],
newTag: "Ganpati Bappa Morya!!",
}),
computed: {
isTagExists() {
return this.tags.includes(this.newTag);
}
},
methods: {
addNewTag() {
// if (this.newTag && !this.isTagExists) { 
this.tags.push(this.newTag);
this.newTag = "";

}
},
removeTag(index) {
this.tags.splice(index, 1);
},
removeLastTag() {
if (this.newTag.length === 0) {
this.removeTag(this.tag.length - 1);
}

}
});
