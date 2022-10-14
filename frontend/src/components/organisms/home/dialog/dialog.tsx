import {
  Dialog as BaseDialog,
  Button,
  DialogActions,
  Grid,
  TextField,
} from '@mui/material';
import { DialogProps } from './dialog.type';

export const Dialog: React.FC<DialogProps> = ({
  name,
  setName,
  email,
  setEmail,
  selectedTeacher,
  setSelectedTeacher,
  setLecture,
}) => (
  <BaseDialog
    onClose={() => setSelectedTeacher(null)}
    open={selectedTeacher !== null}
    fullWidth
    PaperProps={{ sx: { p: 5 } }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Digite o nome"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Digite o email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
    </Grid>

    <DialogActions sx={{ mt: 5 }}>
      <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
      <Button onClick={() => setLecture()}>Marcar</Button>
    </DialogActions>
  </BaseDialog>
);
