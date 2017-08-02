/**
 * Created by Sarvan on 02/08/17.
 */

// load in JSON data from file
var data;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "emp_details.json", true);
oReq.send();

function reqListener(e) {
    data = JSON.parse(this.responseText);
}

var Greeting = React.createClass({

    componentWillMount: function () {
        console.log(data.employees[0]);
    },
    render: function () {
        return (
            <p>{this.props.message}</p>
        );
    }
});

setInterval(function () {
    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
    var message =data.employees;
    var randomMessage = "FirstName :"+ message[Math.floor((Math.random() * 3))].firstName;
    ReactDOM.render(
        // loadjson={dataJson}
        <Greeting message={randomMessage}/>,
        document.getElementById('greeting-div')
    );
}, 2000);

// var RandomMessage = React.createClass({
//     getInitialState: function() {
//         return { message: 'Hello, Universe' };
//     },
//     onClick: function() {
//         var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
//         var randomMessage = messages[Math.floor((Math.random() * 3))];
//
//         this.setState({ message: randomMessage });
//     },
//     render: function() {
//         return (
//             <div>
//                 <MessageView message={ this.state.message }/>
//                 <p><input type="button" onClick={ this.onClick } value="Change Message"/></p>
//             </div>
//         );
//     }
// });
//
// var MessageView = React.createClass({
//     render: function() {
//         return (
//             <p>{ this.props.message }</p>
//         );
//     }
// });


// var RandomMessage = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 Redering....
//             </div>
//         )
//     }
// });
