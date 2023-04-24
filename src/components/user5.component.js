import React, {Component} from 'react';
import { DataGrid } from "@mui/x-data-grid";

export default class User5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/user5')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({users : data});
            })
    }

    render(){
        const columns = [
            { field: "_id", headerName: "City", width: 200 },
            { field: "avgIncome", headerName: "Average Income", width: 200, valueGetter: (params) => `$${params.value}`,},
        ];
        const { users } = this.state;
        const rows = users.map((user, index) => {
            return { ...user, id: index + 1 };
        });
        return(
            <div style={{ height: 600, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} pageSize={10} />
            </div>
        );
    }
}