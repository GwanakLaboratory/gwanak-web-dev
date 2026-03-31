import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

function useCustomForm<T extends Record<string, unknown>>(
  options?: UseFormProps<T>,
): UseFormReturn<T> {
  return useForm<T>({
    ...options,
  });
}

export default useCustomForm;
