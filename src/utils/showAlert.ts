import Swal, { SweetAlertIcon } from 'sweetalert2';
import { theme } from '../global/theme';

export interface AlertProps {
  icon?: SweetAlertIcon;
  title: string;
  text: string;
  customClass?: string;
}

export const showAlert = ({ title, text, icon, customClass }: AlertProps) =>
  Swal.fire({
    icon: icon || 'info',
    title,
    text,
    confirmButtonColor: theme.palette.primary.main,
    customClass: {
      container: customClass,
    },
  });
