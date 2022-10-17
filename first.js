let k = 0;
function add_ell(val)
{
    k++;
    let br = document.createElement('br')
    document.getElementById('form').appendChild(br)
    const $el = document.createElement('input');
    $el.type = val;
    $el.value = val;
    $el.name = toString(k);
    document.getElementById('form').appendChild($el);
}
function add_label()
{
    if(k>0)
    {
        let label = document.createElement('label');
        label.setAttribute('for',toString(k));
        label.textContent = '-'+document.getElementById('str').value;
        document.getElementById('form').appendChild(label);
    }
}
