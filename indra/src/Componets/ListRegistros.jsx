import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField';
import LoadingCustomer from "../Componets/LoadingCustomer"

const StyledTableCell = withStyles((theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function ListRegistros({ listData, searchById, loading }) {

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" align="center" gutterBottom>
                        INDRA TEST REACT
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container justify="flex-end" >
                        <TextField
                            id="buscar" label="Buscar" variant="outlined" onChange={searchById} margin="dense"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id Festivo</StyledTableCell>
                                    <StyledTableCell >Día Festivo</StyledTableCell>
                                    <StyledTableCell >Descripción</StyledTableCell>
                                    <StyledTableCell >Id Proceso</StyledTableCell>
                                    <StyledTableCell >Acción</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {loading ?
                                (null)
                                :
                                (
                                    <TableBody>
                                        {listData.map((data) => (
                                            <StyledTableRow key={data.idFestivo}>
                                                <StyledTableCell component="th" scope="row">
                                                    {data.idFestivo}
                                                </StyledTableCell>
                                                <StyledTableCell component="th" scope="row">
                                                    {data.diaFestivo}
                                                </StyledTableCell>
                                                <StyledTableCell>{data.descipcion}</StyledTableCell>
                                                <StyledTableCell>{data.idProceso}</StyledTableCell>
                                                <StyledTableCell>
                                                    <Tooltip title="Ver detalle">
                                                        <IconButton
                                                            color="primary" aria-label="upload picture" component="span">
                                                            <Delete />
                                                        </IconButton>
                                                    </Tooltip>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                )
                            }

                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    {loading ?
                        <LoadingCustomer />
                        :
                        <Typography variant="h6" gutterBottom>
                            Mostrando 1 a {listData.length} de {listData.length} registros
                        </Typography>
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default ListRegistros;