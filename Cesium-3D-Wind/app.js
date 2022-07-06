//prettier-ignore
demo = true
const mode = {
  debug: demo ? false : true
}

var panel = new Panel()
//prettier-ignore
var wind3D = new Wind3D(
    panel,
    mode
)
