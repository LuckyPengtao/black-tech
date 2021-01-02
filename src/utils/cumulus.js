export default{
    data: {
        ID : "tagCloud",         // String        => Tagcloud id;
        Class : "tagCloud",      // String        => Tagcloud class;
        Width : 400,             // Integer       => Tagcloud width in pixels;
        Height : 400,            // Integer       => Tagcloud height in pixels;
        Consistent : true,       // Boolean       => Devide tags evenly;
        Rank : 30,               // Integer 0-100 => Tag importance in procents;
        Url : "#",               // String URL    => Tag url;
        OpenInNewWindow: false,  // Boolean       => Open tag url in new window or tab;
        FontMin : 10,            // Float         => Font size for smallest tag in pixels;
        FontMax : 24,            // Float         => Font size for biggest tag in pixels;
        Depth : 150,             // Integer       => Perspective depth;
        AnimationTime : 1,       // Integer       => Animation time and interval, the less it is, the faster the animation is;
        HoverStop : 15,          // Integer 0-100 => Percent of decrease in animation speed when cursor is removed out of the tagcloud;
        HoverTagStop : 95,       // Integer 0-100 => Percent of decrease in animation speed when tag is hovered;
        OverWrite : false        // Boolean       => Override any existing HTML in the tagcloud element;
    }
}
export function distribute(element) {
    element = element || this.element;
    let i = this.items.length - 1, l = 0, item;
    if (this.overwrite) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    for (; i >= l; --i) {
        item = this.items[i];
        if (item instanceof Tag && item.title) { // only Tag class allowed with at least titles;
            item.Activate(this.attractor); // only activate after appended to DOM;
        } else {
            this.items.splice(i, 1);
        }
    }
    element.appendChild(this.attractor.element);
    this.attractor.Activate(); // only activate after appended to DOM;

    let p, t,
        ii = 0, ll = this.items.length,
        radius = this.radius;
    for (; ii < ll; ii++) {
        p = this.consistent ? Math.acos(-1 + (2 * ii) / ll) : Math.random() * (Math.PI);
        t = this.consistent ? Math.sqrt(ll * Math.PI) * p : Math.random() * (2 * Math.PI);
        this.items[ii].position.set(
            radius * Math.sin(p) * Math.cos(t),
            radius * Math.sin(p) * Math.sin(t),
            radius * Math.cos(p)
        );
    }
    p = t = ii = ll = radius = null;

    this.Update();

    return this;
}

function Activate(){

}

function Update(){

}
