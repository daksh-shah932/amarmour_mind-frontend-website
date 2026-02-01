function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is missing`);
  return value;
}

export const ENV = {
  API_BASE_URL: required("NEXT_PUBLIC_API_BASE_URL")
};
