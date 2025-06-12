const PU = "1000 fr"; // Prix unitaire
document.getElementById('calculateButton').addEventListener('click',()=>{
            alert('veillé entré une quantité ');
            let quantity = prompt('quel est la quantité'); // Quantité
            let tariftotal;
            if (quantity <= 0) {
                alert('veuillez entrer une quantité valide');
            }
            else if (quantity < 5 &&  quantity > 1 ) {
                tariftotal = quantity * 1000; // Calcul du tarif total
                alert('le tarif total est de ' + tariftotal + ' fr');

            }
            else if (quantity > 5) {
                tariftotal = (quantity * 1000)* 0.90; // Calcul du tarif total avec réduction
                alert('le tarif total est de ' + tariftotal + ' fr');
            }

        })

