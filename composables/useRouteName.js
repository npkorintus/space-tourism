export const useRouteName = () => {
  const route = useRoute();
  return route.name === 'index' ? 'home' : route.name;
}
