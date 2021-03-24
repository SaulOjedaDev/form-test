import React from "react";

import {
  makeStyles,
  Typography,
  fade,
  Button,
  TextField,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formSection: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: theme.spacing(0, 2, 2, 2),
  },
  stepperSection: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: theme.spacing(0, 2),
  },
  stepper: {
    width: "100%",
  },
  buttonsSection: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    boxSizing: "border-box",
  },
}));

const useStepStyle = makeStyles((theme) => ({
  root: (props) => ({
    height: "100%",
    width: "100%",
    backgroundColor: props.isCompleted
      ? fade(theme.palette.success.dark, 0.2)
      : props.isActive
      ? fade("#BAD2EE", 0.5)
      : fade("#EDF3FB", 0.8),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(2),
  }),
  stepNumberContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  stepLabelContainer: {
    height: "100%",
    width: "100%",
    display: "flex",

    alignItems: "flex-start",
  },
  stepLabel: {
    fontWeight: "bold",
  },
  stepNumber: {},
}));

function SettingsStep({ isActive, isCompleted, stepInfo }) {
  const props = { isActive: isActive, isCompleted: isCompleted };
  const classes = useStepStyle(props);
  return (
    <div className={classes.root}>
      <div className={classes.stepNumberContainer}>
        <Typography className={classes.stepNumber} variant="overline">
          PASO 0{stepInfo.number}
        </Typography>
      </div>
      <div className={classes.stepLabelContainer}>
        <div>
          <Typography className={classes.stepLabel} variant="caption">
            {stepInfo?.label}
          </Typography>
        </div>
      </div>
    </div>
  );
}

const useProfileFormStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    paddingTop: theme.spacing(2),
  },
  input: {
    width: "100%",
    margin: theme.spacing(2, 0, 1, 0),
  },
}));

function CreateProfileForm({ defaultValues, getValuesForSubmit }) {
  const classes = useProfileFormStyle();
  const [internalValues, setInternalValues] = React.useState({
    first_name: "",
    last_name: "",
  });

  React.useEffect(() => {
    if (defaultValues) {
      setInternalValues(defaultValues);
    }
  }, [setInternalValues]);

  function handleChange(event) {
    setInternalValues({
      ...internalValues,
      [event.target.name]: event.target.value,
    });
  }

  React.useEffect(() => {
    getValuesForSubmit(internalValues);
  }, [internalValues]);

  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h6">
        Cuentanos un poco sobre ti
      </Typography>
      <Typography variant="body1">
        Agrega la informacion basica de tu perfil
      </Typography>

      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Nombres(s)"
        value={internalValues.first_name}
        onChange={handleChange}
        name="first_name"
      />
      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Apellido(s)"
        value={internalValues.last_name}
        onChange={handleChange}
        name="last_name"
      />
    </div>
  );
}

const useFacilityFormStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    paddingTop: theme.spacing(2),
  },
  input: {
    width: "100%",
    margin: theme.spacing(1, 0, 1, 0),
  },
  inputContainer_80_20: {
    width: "100%",
    height: "auto",
    display: "flex",
    margin: theme.spacing(1, 0, 1, 0),
    justifyContent: "space-around",
  },
  input_60_percent: {
    width: "65%",
  },
  input_30_percent: {
    width: "30%",
  },
  grow: {
    flexFlow: 1,
  },
}));

function CreateFacilityForm({ defaultValues, getValuesForSubmit }) {
  const classes = useFacilityFormStyle();
  const [internalValues, setInternalValues] = React.useState({
    business_name: "",
    country: "",
    state: "",
    localoty: "",
    street1: "",
    street2: "",
    street_number: "",
    category: [],
  });

  React.useEffect(() => {
    if (defaultValues) {
      setInternalValues(defaultValues);
    }
  }, [setInternalValues]);

  function handleChange(event) {
    setInternalValues({
      ...internalValues,
      [event.target.name]: event.target.value,
    });
  }

  React.useEffect(() => {
    getValuesForSubmit(internalValues);
  }, [internalValues]);

  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h6">
        Hablanos sobre tu negocio
      </Typography>
      <Typography variant="body1">
        Agrega la informacion basica de tu negocio
      </Typography>

      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Nombre de tu negocio"
        value={internalValues.business_name}
        onChange={handleChange}
        name="business_name"
      />
      <div className={classes.inputContainer_80_20}>
        <TextField
          variant="outlined"
          className={classes.input_60_percent}
          fullWidth
          label="Calle"
          value={internalValues.street1}
          onChange={handleChange}
          name="street1"
        />
        <div className={classes.grow} />
        <TextField
          variant="outlined"
          className={classes.input_30_percent}
          fullWidth
          label="Número"
          value={internalValues.number}
          onChange={handleChange}
          name="number"
        />
      </div>
      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Fraccionamiento"
        value={internalValues.street2}
        onChange={handleChange}
        name="street2"
      />
      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Fraccionamiento"
        value={internalValues.street2}
        onChange={handleChange}
        name="street2"
      />
      <TextField
        variant="outlined"
        className={classes.input}
        fullWidth
        label="Fraccionamiento"
        value={internalValues.street2}
        onChange={handleChange}
        name="street2"
      />
    </div>
  );
}

export default function Form() {
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(1);
  const [completedStep, setCompletedStep] = React.useState([]);
  const [profileFormValues, setProfileFormValues] = React.useState(null);
  const [facilityFormValues, setFacilityFormValues] = React.useState(null);

  function nextStep(activeStep) {
    if (activeStep === 1) {
      let newCompleteState = completedStep;
      newCompleteState.push(activeStep);
      setCompletedStep(newCompleteState);
      setActiveStep(activeStep + 1);
    }
  }

  function prevStep(activeStep) {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);

    setCompletedStep([]);
  }

  // // If the user already have a user profile, go to the next form.
  // React.useEffect(() => {
  //   if (
  //     auth.user.userprofile.first_name !== "" &&
  //     auth.user.userprofile.last_name !== ""
  //   ) {
  //     setActiveStep(1);
  //   }
  // }, [auth.user.userprofile.first_name, auth.user.userprofile.last_name]);
  const steps = [
    {
      number: 1,
      label: "Registrar negocio",
    },
    {
      number: 2,
      label: "Registra tu perfil",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.stepperSection}>
        {steps.map((step, index) => {
          return (
            <SettingsStep
              key={index}
              stepInfo={step}
              isActive={step.number === activeStep}
              isCompleted={completedStep.includes(step.number)}
            />
          );
        })}
      </div>
      <div className={classes.formSection}>
        {activeStep === 1 && (
          <CreateProfileForm
            defaultValues={profileFormValues}
            getValuesForSubmit={(values) => setProfileFormValues(values)}
          />
        )}
        {activeStep === 2 && (
          <CreateFacilityForm
            defaultValues={facilityFormValues}
            getValuesForSubmit={(values) => setFacilityFormValues(values)}
          />
        )}

        <div className={classes.buttonsSection}>
          {activeStep === 2 && (
            <Button onClick={() => prevStep(activeStep)}>Anterior</Button>
          )}
          <Button color="primary" onClick={() => nextStep(activeStep)}>
            {activeStep > 1 ? "Terminar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
}
