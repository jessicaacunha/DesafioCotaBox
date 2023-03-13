import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const TableCustomers = ({ customers}) => {
  const getChartData = (data) => {
    const labels = data.map((item) => `${item.nome} ${item.sobrenome}`);
    const values = data.map((item) => item.participacao);
    const backgroundColor = ["#FF6384", "#36A2EB", "#FFCE56", "#FF6340", "#F58047", "#F5F"];

    return {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: backgroundColor,
        },
      ],
    };
  };

  return (
    <div className="table">
      <h2 className="table-title">Customer list</h2>
      <div className="container-table">
        <div className="left">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Id</TableCell>
                <TableCell align="left">First name</TableCell>
                <TableCell align="left">Last name</TableCell>
                <TableCell align="center">Participation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{index}</TableCell>
                  <TableCell align="left">{customer.nome}</TableCell>
                  <TableCell align="left">{customer.sobrenome}</TableCell>
                  <TableCell align="center">{customer.participacao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="right">
          <div className="chart-container">
            <Doughnut data={getChartData(customers)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCustomers;
