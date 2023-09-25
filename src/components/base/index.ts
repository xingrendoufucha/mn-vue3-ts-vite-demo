import { App, defineAsyncComponent} from 'vue'
const coms = import.meta.globEager('./**/*.vue')
console.log(coms)
const components = import.meta.glob('./**/*.vue')
console.log(components)
// export default function (app: APP) {

// }
    for (const path in components) {
        const name = path.replace(/\.\/|\.vue/g, '')
        console.log(name)
        // app.component(name, defineAsyncComponent(components[path]))
    }

export default function install(app: App): void {
    for (const [key, value] of Object.entries(components)) {
        // console.log("😂👨🏾‍❤️‍👨🏼==>：", key);
        //./CommReport.vue// console.log("😂👨🏾‍❤️‍👨🏼==>：", value);
        let name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
        // name = name.replace(/([A-Z])/g, "-$1").toLowerCase().slice();
        // console.log("😂👨🏾‍❤️‍👨🏼==>：name:", name);
        // CommReport ==> comm-report
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        app.component(name, defineAsyncComponent(value as any))
    }
}