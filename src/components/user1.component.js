import React, {Component} from 'react';
import { DataGrid } from "@mui/x-data-grid";

export default class User1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/user1')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({users : data});
            })
    }

    render(){
        const columns = [
            { field: "id", headerName: "ID", width: 200 },
            { field: "first_name", headerName: "First Name", width: 200 },
            { field: "last_name", headerName: "Last Name", width: 200 },
            { field: "email", headerName: "Email", width: 400 },
            { field: "gender", headerName: "Gender", width: 400 },
            { field: "city", headerName: "City", width: 400 },
            { field: "quote", headerName: "Quote", width: 400 },
            { field: "phone_price", headerName: "Phone Price", width: 400 },
            { field: "car", headerName: "Car", width: 200 },
            { field: "income", headerName: "Income", width: 200 },
        ];
        const { users } = this.state;
        return(
            <div style={{ height: 600, width: "100%" }}>
                <DataGrid rows={users} columns={columns} pageSize={10} />
            </div>
        );
    }
}