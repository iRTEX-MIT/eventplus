var require = { paths: { 'vs': '/javascripts/monaco/min/vs' } };

$(document).ready(function () {

    NProgress.start()

    const editor = monaco.editor.create(document.getElementById('codeContainer'), {
        value: "",
        language: 'javascript',
        automaticLayout: true,
        theme: "vs-dark",
    });

    axios({
        method: 'get',
        url: `/api/v1/vm/all`
    }).then(function (response) {
        if (response.status == 200) {

            editor.getModel().setValue(String(response.data));

            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {

            });

            NProgress.done()

        }
    });


});

$(document).resize(function() {
    monaco.editor.layout();
});