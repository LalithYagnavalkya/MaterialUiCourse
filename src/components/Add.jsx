import { Add as AddIcon } from "@mui/icons-material";
import { Fab, Modal, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Hello</Box>
      </Modal>
    </>
  );
};

export default Add;
