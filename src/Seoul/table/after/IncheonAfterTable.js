import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rank, name, category, count) {
  return { rank, name, category, count};
}

const rows = [
  createData(1,'인천국제공항제1여객터미널','기타관광',"1,454,352"),
  createData(2,'현대프리미엄아울렛송도점','쇼핑',"1,139,492"),
  createData(3,'을왕리해수욕장','자연관광',"885,705"),
  createData(4,'인천국제공항제2여객터미널','기타관광',"847,325"),
  createData(5,'월미도','자연관광',"826,178"),
];

function IncheonAfterTable() {
  return (
    <>
    <div>
      <h3 align= "center">인천 관광지 검색순위(코로나 후)</h3>
    </div>
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>순위</b></TableCell>
              <TableCell align="right"><b>관광지명</b></TableCell>
              <TableCell align="right"><b>카테고리</b></TableCell>
              <TableCell align="right"><b>검색건수</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
    
  );
}

export default IncheonAfterTable;