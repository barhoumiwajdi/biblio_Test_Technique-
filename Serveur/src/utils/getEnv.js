
 function getEnv(varName, defaultValue) {
    return process.env[varName] || defaultValue;
  }
  
  function getEnvVariables(...varNames) {
    return varNames.reduce((acc, varName) => ({ ...acc, [varName]: process.env[varName] }), {});
  }
  
  export { getEnv, getEnvVariables };
  