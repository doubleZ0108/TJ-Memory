function initHero(){
    console.log("hero...");
    new Vue({
        el: '#hero',
        data: {
            title: "",
            subtitle: "",
            quote: "",
            styleObject: {
                backgroundImage: "",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }
        },
        created: function(){
            this.initFromContentful();
        },
        methods: {
            initFromContentful: async function(){
                let response = await getEntries_by_ContentType(client, 'tjMemoryHero');
                let heroObj = response.items[0].fields;
                this.title = heroObj.title;
                this.subtitle = heroObj.subtitle;
                this.quote = heroObj.quote;
                this.styleObject.backgroundImage = "url(" + "https:" + heroObj.bg.fields.file.url + ")";
            }
        }
    });
}