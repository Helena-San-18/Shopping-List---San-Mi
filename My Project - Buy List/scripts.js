document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const input = document.getElementById('input-item');
    const shoppingList = document.getElementById('shopping-list');
    const alertBox = document.querySelector('.alertBox'); // Corrigir para a classe correta
    const closeAlertButton = document.getElementById('closeAlertButton');
    const alertMessage = document.getElementById('mess-alert');

    alertBox.style.display = 'none';
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        addItem(input.value);
        input.value = '';
    });

    function addItem(text) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('list-item');  // Usar a classe `list-item`

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '2px'; // Adjust margin as needed
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                itemDiv.style.display = 'none'; // Ocultar a div ao marcar o checkbox }
            }
            });

        const itemText = document.createElement('span');
        itemText.textContent = text;

        const removeButton = document.createElement('span'); // Alterar para `span`
        removeButton.innerHTML = '<i class="fa-solid fa-xmark delete-icon"></i>';
        removeButton.classList.add('delete-icon');
        removeButton.addEventListener('click', function () {
            removeItem(itemDiv, text);
        });

        itemDiv.appendChild(checkbox); // Adiciona o checkbox primeiro
        itemDiv.appendChild(itemText); // Adiciona o texto do item
        itemDiv.appendChild(removeButton); // Adiciona o botão de remoção

        shoppingList.appendChild(itemDiv);
    }

    function removeItem(item, text) {
        item.remove();
        showAlert(`The item "${text}" has been removed from the list.`);
    }

    function showAlert(message) {
        alertMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`; // Garantir que o ícone seja incluído na mensagem
        alertBox.style.display = 'block';
        setTimeout(function () {
            alertBox.style.display = 'none';
        }, 3000);
    }

    closeAlertButton.addEventListener('click', function () {
        alertBox.style.display = 'none';
    });
});




