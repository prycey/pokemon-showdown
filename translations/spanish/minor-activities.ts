import type { Translations } from '../../server/chat';

export const translations: Translations = {
  strings: {
    'The announcement has ended.': 'El anuncio ha terminado.',
    'Battles do not support announcements.': 'Las batallas no admiten anuncios.',
    'You are not allowed to use filtered words in announcements.':
      'No puedes usar palabras filtradas en los anuncios.',
    'There is already a poll or announcement in progress in this room.':
      'Ya hay una encuesta o anuncio en progreso en esta sala.',
    'An announcement was started by ${user.name}.': 'Un anuncio fue creado por ${user.name}.',
    'There is no announcement running in this room.':
      'No hay ningun anuncio en la sala actualmente.',
    'There is no timer to clear.': 'No hay temporizador que quitar.',
    'The announcement timer was turned off.': 'El temporizador del anuncio fue desactivado.',
    'Invalid time given.': 'Tiempo especificado no válido.',
    'The announcement timer is off.': 'El temporizador del anuncio está apagado.',
    'The announcement was ended by ${user.name}.':
      'El anuncio ha sido finalizado por ${user.name}.',
    'Accepts the following commands:': 'Acepta los siguientes comandos:',

    'That option is not selected.': 'Esa opción no está seleccionada.',
    'You have already voted for this poll.': 'Tú ya has votado por esta encuesta.',
    'No options selected.': 'Ninguna opción seleccionada.',
    'you will not be able to vote after viewing results':
      'Tú no podrás votar después de ver los resultados',
    'View results': 'Ver resultados',
    "You can't vote after viewing results": 'Tú no puedes votar después de ver los resultados',
    'The poll has ended &ndash; scroll down to see the results':
      'La encuesta ha finalizado &ndash; desliza hacia abajo para ver los resultados',
    'Vote for ${num}': 'Vota por ${num}',
    'Submit your vote': 'Envía tu voto',
    Quiz: 'Quiz',
    Poll: 'Encuesta',
    Submit: 'Enviar',
    ended: 'finalizada',
    votes: 'votos',
    delete: 'eliminar',
    'Poll too long.': 'La encuesta es demasiado larga.',
    'Battles do not support polls.': 'Las batallas no admiten encuestas.',
    'You are not allowed to use filtered words in polls.':
      'No puedes usar palabras filtradas en las encuestas.',
    'Not enough arguments for /poll new.': 'No hay suficientes argumentos para /poll new.',
    'Too many options for poll (maximum is 8).': 'Demasiadas opciones para la encuesta (máximo 8).',
    'There are duplicate options in the poll.': 'Hay opciones duplicadas en la encuesta.',
    '${user.name} queued a poll.': '${user.name} ha puesto en espera una encuesta.',
    'A poll was started by ${user.name}.': 'Una encuesta fue iniciada por ${user.name}.',
    'The queue is already empty.': 'La cola ya está vacía.',
    'Cleared poll queue.': 'Cola de encuestas borrada.',
    'Room "${roomid}" not found.': 'Sala "${roomid}" no encontrada.',
    'Can\'t delete poll at slot ${slotString} - "${slotString}" is not a number.':
      ' No se puede eliminar la encuesta en la posición ${slotString} - "${slotString}" no es un número.',
    'There is no poll in queue at slot ${slot}.':
      'No hay encuesta en espera en la posición ${slot}.',
    '(${user.name} deleted the queued poll in slot ${slot}.)':
      '(${user.name} borró la encuesta puesta en espera en la posición ${slot}.)',
    'There is no poll running in this room.': 'No hay encuesta en curso en esta sala.',
    'To vote, specify the number of the option.': 'Para votar, especifíca el número de la opción.',
    'Option not in poll.': 'La opción no está en la encuesta.',
    'The poll timer was turned off.': 'El temporizador de la encuesta fue desactivado.',
    'The queued poll was started.': 'La encuesta en espera empezó.',
    'The poll timer was turned on: the poll will end in ${timeout} minute(s).':
      'El temporizador de la encuesta fue activado: la encuesta terminará en ${timeout} minuto(s).',
    'The poll timer was set to ${timeout} minute(s) by ${user.name}.':
      'El temporizador de encuesta fue fijado a ${timeout} minuto(s) por ${user.name}.',
    'The poll timer is on and will end in ${poll.timeoutMins} minute(s).':
      'El temporizador de la encuesta está activado y finalizará automáticamente en ${poll.timeoutMins} minuto(s).',
    'The poll timer is off.': 'El temporizador de la encuesta está desactivado.',
    'The poll was ended by ${user.name}.': 'La encuesta fue terminada por ${user.name}.',
    'Queued polls:': 'Encuestas en espera.',
    Refresh: 'Actualizar.',
    'No polls queued.': 'No hay encuestas en espera.',
    '#${number} in queue': '#${number} en espera.',
  },
};
