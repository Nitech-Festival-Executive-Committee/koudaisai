function duplicate(target_num){
    let clone_element = document.getElementById("copy" + target_num).cloneNode(true);
    clone_element.classList = "phone-only";
    document.getElementById("position" + target_num).after(clone_element);
}