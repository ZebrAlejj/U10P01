$(document).ready(function () {
    getCivi();
});

/**
 *
 *
 */
function getCivi() {
    $.ajax({
        url: "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",
        type: "GET",
        success: function(response){
            printAll(response);
        }
    });
}

/**
 *
 *
 * @param {*} response
 */
function printAll(response) {
    var nodes = []
    response.civilizations.map(civi => {
        console.log(civi);
        class ArmyType extends React.Component {
            render() {
                let armyType = civi.army_type
                return (<p>Army type: {armyType}</p>);
            }
        }
        class CiviBonus extends React.Component {
            render() {
                let civiBonus = civi.civilization_bonus
                let bonuses = []
                civiBonus.map(bonus => {
                    bonuses.push(<li>Civilization Bonus: {bonus}</li>)
                })
                return (
                    <ul>
                        {bonuses}
                    </ul>
                );
            }
        }
        class CiviName extends React.Component {
            render() {
                let civiName = civi.name
                return (
                    <div>
                        <h2>Name: {civiName}</h2>
                        <ArmyType />
                        <CiviBonus />
                    </div>
                );
            }
        }

        class Civilization extends React.Component {
            render() {
                return (<li><CiviName /></li>);
            }
        }
        nodes.push(<Civilization/>)  
    })   
    renderAll(nodes);
}
/**
 *
 *
 * @param {*} nodes
 */
function renderAll(nodes) {
    console.log(nodes)
    ReactDOM.render(
        <div>{nodes}</div>,
        document.getElementById('list')
    );
}


