import pygame
import sys
import random

# Inisialisasi Pygame
pygame.init()

# Warna
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Ukuran layar
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 400

# Ukuran blok dan grid
BLOCK_SIZE = 20
GRID_SIZE = 20

# Inisialisasi layar Pygame
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Snake Game')

# Inisialisasi Snake
snake = [(100, 100), (90, 100), (80, 100)]
snake_direction = (1, 0)

# Inisialisasi buah
fruit = (random.randint(0, GRID_SIZE - 1) * BLOCK_SIZE, random.randint(0, GRID_SIZE - 1) * BLOCK_SIZE)

# Fungsi menggambar snake
def draw_snake():
    for segment in snake:
        pygame.draw.rect(screen, WHITE, (segment[0], segment[1], BLOCK_SIZE, BLOCK_SIZE))

# Fungsi menggambar buah
def draw_fruit():
    pygame.draw.rect(screen, RED, (fruit[0], fruit[1], BLOCK_SIZE, BLOCK_SIZE))

# Fungsi utama
def main():
    global snake
    global fruit
    global snake_direction

    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP and snake_direction != (0, 1):
                    snake_direction = (0, -1)
                elif event.key == pygame.K_DOWN and snake_direction != (0, -1):
                    snake_direction = (0, 1)
                elif event.key == pygame.K_LEFT and snake_direction != (1, 0):
                    snake_direction = (-1, 0)
                elif event.key == pygame.K_RIGHT and snake_direction != (-1, 0):
                    snake_direction = (1, 0)

        # Update snake position
        head = (snake[0][0] + snake_direction[0] * BLOCK_SIZE, snake[0][1] + snake_direction[1] * BLOCK_SIZE)
        snake = [head] + snake[:-1]

        # Check collision with fruit
        if head == fruit:
            snake.append(snake[-1])
            fruit = (random.randint(0, GRID_SIZE - 1) * BLOCK_SIZE, random.randint(0, GRID_SIZE - 1) * BLOCK_SIZE)

        # Check collision with walls or itself
        if (
            head[0] < 0 or
            head[0] >= SCREEN_WIDTH or
            head[1] < 0 or
            head[1] >= SCREEN_HEIGHT or
            head in snake[1:]
        ):
            pygame.quit()
            sys.exit()

        # Clear screen
        screen.fill(BLACK)

        # Draw snake and fruit
        draw_snake()
        draw_fruit()

        # Update display
        pygame.display.flip()

        # Cap the frame rate
        clock.tick(10)

if __name__ == "__main__":
    main()
