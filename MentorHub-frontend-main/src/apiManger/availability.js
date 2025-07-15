import AxiosInstances from ".";

// const getMentorAvailability = async (mentorId, duration) => {
//   return await AxiosInstances.get(
//     `availability/${mentorId}?duration=${duration}`
//   );
// };

const getMentorAvailability = async (mentorId, duration) => {
  const response = await AxiosInstances.get(
    `availability/${mentorId}?duration=${duration}`
  );
  return Response.data;
};

export default { getMentorAvailability };
