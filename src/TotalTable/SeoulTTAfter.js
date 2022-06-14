import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TotalTable.css";

function createData(rank, name, category) {
  return { rank, name, category};
}

const rows = [
  createData(96719284,20197962,"2%"),
];

function SeoulTTAfter() {
  return (
    <>
    <div>
      <h3>서울 관람객 관련 정보(코로나 후)</h3>
    </div>
    <div class="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align= "center"><b>검색건수</b></TableCell>
              <TableCell align= "center"><b>여행객수</b></TableCell>
              <TableCell align= "center"><b>방문자 수 대비 관광객 수 비율</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align= "center" component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell align= "center">{row.name}</TableCell>
                <TableCell align= "center">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
    
  );
}

export default SeoulTTAfter;