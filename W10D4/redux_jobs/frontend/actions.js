// The Apps Action Creator's takes two strings (city, name)
//  and its =>FUNCTION is to (RETURN) a {POJO}
// with a type: "SWITCH_LOCATION" and two key:value pairs
// city and jobs.  It is exported and imported

const selectLocation = (city, jobs) => ({
  type: "SWITCH_LOCATION",
  city,
  jobs,
});

export default selectLocation;
// window.selectLocation = selectLocation;
