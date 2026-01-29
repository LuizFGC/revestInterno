<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class EntregasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'codigo'     => $this->faker->unique()->numberBetween(1, 9999999),
            'cliente'    => $this->faker->name(),
            'endereco'   => $this->faker->address(),
            'status'     => $this->faker->randomElement([
                'Pendente',
                'Entregue',
                'Rota',
                'Cancelado',
            ]),
            'entregador' => $this->faker->name(),
            'previsao'   => $this->faker->dateTimeBetween('now', '+7 days'),
        ];
    }
}
